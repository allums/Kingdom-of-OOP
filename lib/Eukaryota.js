'use strict';

import LivingThing from "./LivingThing.js";

export
default class Eukaryota extends LivingThing {

    constructor(name, uniCellular, asexual, mobile, heterotroph) {
    		
        this._name = name;
        this._uniCellular = uniCellular;
		this._asexual = asexual;
        this._mobile = mobile;
        this._heterotroph = heterotroph;


    }



}