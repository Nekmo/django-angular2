from django.contrib.auth import get_user_model
from rest_framework import serializers

from pokedex.models import Pokemon, Specie


class DemoSerializerMixin(object):
    def get_field_names(self, declared_fields, info):
        expanded_fields = super(DemoSerializerMixin, self).get_field_names(declared_fields, info)

        if getattr(self.Meta, 'extra_fields', None):
            fields = expanded_fields + self.Meta.extra_fields
        else:
            fields = expanded_fields
        if 'id' not in fields:
            fields += ['id']
        return fields


class SpecieSerializer(DemoSerializerMixin, serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Specie
        exclude = ()


class PokemonSerializer(DemoSerializerMixin, serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pokemon
        exclude = ()


class SimpleUserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('url', 'id', 'username')


class UserSerializer(SimpleUserSerializer):
    pass