from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, permissions, renderers, viewsets, filters
from rest_framework.decorators import api_view, detail_route
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.reverse import reverse

from pokedex.models import Pokemon, Specie
from pokedex.serializers import PokemonSerializer, UserSerializer, SpecieSerializer


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class SpecieViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Specie.objects.all()
    serializer_class = SpecieSerializer
    filter_backends = (filters.OrderingFilter, filters.SearchFilter, DjangoFilterBackend)
    ordering_fields = ('identifier', 'generation', 'evolves_from_specie', 'color', 'shape', 'habitat',
                       'gender_rate', 'capture_rate', 'base_happiness', 'is_baby', 'hatch_counter',
                       'has_gender_differences', 'growth_rate', 'forms_switchable', 'order',
                       'conquest_order')
    search_fields = ('identifier', 'generation', 'shape__identifier', 'habitat__identifier',
                     'growth_rate__identifier', 'forms_switchable')
    filter_fields = ('identifier', 'generation', 'evolves_from_specie', 'color', 'shape', 'habitat',
                     'gender_rate', 'capture_rate', 'base_happiness', 'is_baby', 'hatch_counter',
                     'has_gender_differences', 'growth_rate', 'forms_switchable',
                     'conquest_order')
    pagination_class = StandardResultsSetPagination


class PokemonViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
    filter_backends = (filters.OrderingFilter, filters.SearchFilter, DjangoFilterBackend)
    ordering_fields = ('id', 'identifier', 'specie', 'height', 'weight', 'base_experience', 'order', 'is_default')
    search_fields = ('identifier',)
    filter_fields = ('id', 'identifier', 'specie', 'height', 'weight', 'base_experience', 'is_default')
    pagination_class = StandardResultsSetPagination


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
