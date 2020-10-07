'use strict'

const Answers = use('App/Models/Answers')
const AuthenticatedResourceController = use('App/Classes/AuthenticatedResourceController')

class AnswersController extends AuthenticatedResourceController {

    constructor(){
        super();
        this.model = Answers;
    }

}

module.exports = AnswersController