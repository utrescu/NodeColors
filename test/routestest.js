var chai = require('chai');
var should = chai.should();

var request = require('supertest')
  , express = require('express');
 
var app = require('../app/app');

describe('Accés al servidor', function () {

    /**
     * Comprovo que la pàgina principal es carrega i 
     * realment té el títol que ha de tenir.
     */
    describe('Pàgina principal', function () {
        it('La pàgina principal davant GET retorna 200 i té títol', function (done) {
            request(app)
                .get('/')
                .expect(200)
                .expect(/Colors en català/, done);
        });
    });

    /**
     * El servidor respón a diferents peticions GET: 
     *    - /colors
     *    - /color/x 
     */
    describe('Comprovar les diferents peticions GET', function () {

        /**
         * Comprovo que retorna la llista de colors.
         * 
         * TODO: Falta poder comprovar el contingut
         *       Estaria bé poder fer mock de la base de dades
         */
        it('Ha de tornar tots els colors amb GET', function (done) {
            request(app)
                .get('/colors')
                .expect(200, done);
        });        
        /**
         * Comprova que retorna el color demanat.
         */
        it('Torna un color al enviar /color/<nom> GET', function (done) {
            request(app)
               .get('/color/vermell')
               .expect('Content-Type', /json/)
               .expect(200)
               .expect(/"nom":"Vermell"/,done)               
        });
        /**
         * Comprova que dóna error quan el color no existeix.
         */
        it('Torna error quan demanem per patata', function(done) {
            request(app)
              .get('/color/patata')
              .expect(200)
              .expect(/"message":"No trobat"/, done);
        });
    });
});