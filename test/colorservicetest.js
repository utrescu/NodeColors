
var chai = require("chai");
var should = require('chai').should();
var expect = chai.expect;
var assert = chai.assert;
var servei = require("../app/service/colorsservice");
var connection = require("../app/service/connection");

/**
 * Comprova que el servei està funcionant.
 * 
 * Falta descobrir com es fan els 'mocks'
 *  - Per fer mock de connection
 */
describe("Color service test", function () {

    before(function(done) {
        connection.init();
        done();
    }) 

    describe("Recupera tots els colors", function () {
        it("comprova que es reben els colors", function (done) {
            var espero = JSON.parse('{"id":71,"nom":"Vermell","rgb":"#FF0000"}');
            servei.getAll(function(error, data) {                
                assert(Array.isArray(data), 'La llista de colors ha de ser un array');
                // expect(data).to.contain(espero);
                // assert.containSubset(data, espero);
                done();
            })
        });
    });

    describe("Recupera un color", function () {
        it("comprova que es recupera el color vermell", function (done) {
            var espero = JSON.parse('{"id":71,"nom":"Vermell","rgb":"#FF0000"}');
            servei.get("vermell", function(error, data) {
                should.exist(data); 
                data.should.have.property('nom', 'Vermell');
                assert.notStrictEqual(data, espero);
                done();
            });
        });

        it("comprova que un color que no existeix dóna error", function(done) {
            const color_no_trobat = "No trobat";
            servei.get("patata", function(error, data) {
                error.should.be.ok;
                data.should.not.have.property('nom');
                data.should.have.property('message', color_no_trobat);
                done();
            });
        });
        
    });
});
