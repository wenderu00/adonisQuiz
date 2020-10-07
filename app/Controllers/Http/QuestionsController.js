'use strict'

const Questions = use('App/Models/Questions')
const AuthenticatedResourceController = use('App/Classes/AuthenticatedResourceController')

class QuestionsController extends AuthenticatedResourceController {

    constructor(){
        super();
        this.model = Questions;
    }

}

module.exports = QuestionsController