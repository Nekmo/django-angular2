from django.contrib.auth import get_user_model
from rest_framework import serializers

from pokedex.models import Pokemon, Specie, Generation, Habitat, Shape, GrowthRate, Region


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


class RegionSerializer(DemoSerializerMixin, serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Region
        exclude = ()


class GenerationSerializer(DemoSerializerMixin, serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Generation
        exclude = ()


class HabitatSerializer(DemoSerializerMixin, serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Habitat
        exclude = ()


class ShapeSerializer(DemoSerializerMixin, serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Shape
        exclude = ()


class GrowthRateSerializer(DemoSerializerMixin, serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GrowthRate
        exclude = ()


class SpecieSerializer(DemoSerializerMixin, serializers.HyperlinkedModelSerializer):
    growth_rate = GrowthRateSerializer()
    shape = ShapeSerializer()
    habitat = HabitatSerializer()
    generation = GenerationSerializer()

    class Meta:
        model = Specie
        exclude = ()


class PokemonSerializer(DemoSerializerMixin, serializers.HyperlinkedModelSerializer):
    specie = SpecieSerializer()

    class Meta:
        model = Pokemon
        exclude = ()


class SimpleUserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('url', 'id', 'username')


class UserSerializer(SimpleUserSerializer):
    pass