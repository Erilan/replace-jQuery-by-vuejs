# Replacing jQuery by Vuejs

> Demos used in my talk about "Replacing jQuery by Vuejs"

## Demo

Including Vue instance in different way in a project : the simple way, the widget approach

## Running

This symfony instance has to be behind a webserver (like an apache in docker)
We use Webpack Encore to speed up the setup

You can use this [simple docker](https://github.com/Erilan/simple-dev-docker-stack) repository : it's not perfect, but easy to use. 

``` bash
# install dependencies
$ composer install // install symfony vendors
$ npm install

# build assets part
$ npm run dev
```

## Talk

This demo is used at MontpellierJS 17/10/2018

[Slides](https://docs.google.com/presentation/d/1YoCfiGe8VO4TROhpFShh1XNgvMYj7yWBT064JoH5crw/edit?usp=sharing)