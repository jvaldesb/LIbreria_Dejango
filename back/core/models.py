from django.db import models
from django.conf import settings


class Book(models.Model):
    title = models.CharField('Titulo', max_length=120)
    publication_date = models.DateField('Fecha de publicación')
    description = models.TextField('Descripción')
    cover = models.URLField('Portada del libro')

    class Meta:
        verbose_name = 'Libro'
        verbose_name_plural = 'Libros'

    def __str__(self):
        return str(self.id) + " " + self.title


class Comment(models.Model):
    book_id = models.ForeignKey(Book, 'Libro')
    text = models.TextField('Texto', max_length=1000)
    create_date = models.DateField('Fecha de publicación')
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, 'Usuario')

    class Meta:
        verbose_name = 'Comentario'
        verbose_name_plural = 'Comentarios'

    def __str__(self):
        return str(self.id) + " " + self.book_id.title
