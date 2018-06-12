from string import Template
from rest_framework import serializers
from rest_framework.serializers import SerializerMetaclass

FIELD_TPL = """\
     @Field() $name: $type;\
"""

TPL = """
///////////////////////////////////////
// ${model} API
///////////////////////////////////////
export class ${model} extends SerializerService {
$fields
}

@Injectable({
  providedIn: 'root'
})
export class ${model}Api extends ApiService {

    url = '${url}';
    serializer = ${model};

    constructor(http: HttpClient) {
        super(http);
    }
}
"""

TS_TYPES = {
    serializers.CharField: 'string',
    serializers.EmailField: 'string',
    serializers.IPAddressField: 'string',
    serializers.DateField: 'Date',
    serializers.DateTimeField: 'Date',
    serializers.TimeField: 'string',
    serializers.DurationField: 'string',
    serializers.BooleanField: 'boolean',
    serializers.NullBooleanField: 'boolean',
    serializers.URLField: 'string',
    serializers.HyperlinkedIdentityField: 'string',
    serializers.HyperlinkedRelatedField: 'string',
    serializers.ChoiceField: 'string',
    serializers.UUIDField: 'string',
    serializers.SlugField: 'string',
    serializers.IntegerField: 'number',
    serializers.DecimalField: 'number',
    serializers.FloatField: 'number',
}


def get_field(name, field):
    cls = field.__class__
    many = False
    if cls == serializers.ManyRelatedField:
        many = True
        cls = field.child_relation.__class__
    type_ = TS_TYPES.get(cls, 'any')
    if isinstance(cls, SerializerMetaclass):
        type_ = cls.Meta.model._meta.object_name
    if many:
        type_ += '[]'
    return Template(FIELD_TPL).substitute(name=name, type=type_)


def tpl(view, pattern):
    serializer = view.serializer_class()
    model = serializer.Meta.model._meta.object_name
    url = '/' + ''.join([part._regex.lstrip('^').rstrip('$') for part in pattern])
    fields = [get_field(name, field) for name, field in serializer.get_fields().items()]
    return Template(TPL).substitute(url=url, model=model, fields='\n'.join(fields))
