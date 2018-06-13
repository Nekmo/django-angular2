from django.db import models

# Create your models here.


class Color(models.Model):
    identifier = models.CharField(max_length=20)

    class Import:
        file = 'pokemon_colors'


class Shape(models.Model):
    identifier = models.CharField(max_length=20)

    class Import:
        file = 'pokemon_shapes'


class Habitat(models.Model):
    identifier = models.CharField(max_length=20)

    class Import:
        file = 'pokemon_habitats'


class GrowthRate(models.Model):
    identifier = models.CharField(max_length=20)
    formula = models.TextField()

    class Import:
        file = 'growth_rates'


class Region(models.Model):
    identifier = models.CharField(max_length=30)
    
    class Import:
        file = 'regions'


class Generation(models.Model):
    main_region = models.ForeignKey(Region, on_delete=models.PROTECT)
    identifier = models.CharField(max_length=30)
    
    class Import:
        file = 'generations'


class Specie(models.Model):
    identifier = models.CharField(max_length=50)
    generation = models.ForeignKey(Generation, on_delete=models.PROTECT)
    evolves_from_specie = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True)
    # evolution_chain =
    color = models.ForeignKey(Color, on_delete=models.PROTECT)
    shape = models.ForeignKey(Shape, on_delete=models.PROTECT)
    habitat = models.ForeignKey(Habitat, on_delete=models.PROTECT, blank=True, null=True)
    gender_rate = models.SmallIntegerField()
    capture_rate = models.PositiveSmallIntegerField()
    base_happiness = models.PositiveSmallIntegerField()
    is_baby = models.BooleanField()
    hatch_counter = models.PositiveSmallIntegerField()
    has_gender_differences = models.BooleanField()
    growth_rate = models.ForeignKey(GrowthRate, on_delete=models.PROTECT)
    forms_switchable = models.BooleanField()
    order = models.PositiveSmallIntegerField()
    conquest_order = models.PositiveSmallIntegerField(null=True, blank=True)

    class Import:
        file = 'pokemon_species'


class Pokemon(models.Model):
    identifier = models.CharField(max_length=50)
    specie = models.ForeignKey(Specie, on_delete=models.CASCADE)
    height = models.PositiveSmallIntegerField()
    weight = models.PositiveSmallIntegerField()
    base_experience = models.PositiveSmallIntegerField()
    order = models.PositiveSmallIntegerField()
    is_default = models.BooleanField()

    class Import:
        file = 'pokemon'
        fields_map = {'specie': 'species_id'}
