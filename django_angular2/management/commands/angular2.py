"""Generate Angular 5+ Typescript classes from REST API.
"""
from django.core.management.base import BaseCommand, CommandError
from django.conf import settings

from django_angular2.rest_framework_api import get_api_views
from django_angular2.typescript import tpl


class Command(BaseCommand):
    help = globals()['__doc__']

    def handle(self, *args, **options):
        from snippets.urls import router, urlpatterns
        # router.registry = <class 'list'>: [('snippets', <class 'snippets.views.SnippetViewSet'>, 'snippet'), ('users', <class 'snippets.views.UserViewSet'>, 'user')]
        # view.serializer_class
        # view.ordering_fields
        for view, pattern in get_api_views():
            print(tpl(view, pattern))
