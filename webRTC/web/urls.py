from django.conf.urls import url

from .views import Index

app_name = 'web'

urlpatterns = [
    url(r'^$', Index.as_view(), name='index'),
]
