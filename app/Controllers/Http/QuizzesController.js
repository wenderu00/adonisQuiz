'use strict'

const Quizzes = use('App/Models/Quizzes')
const AuthenticatedResourceController = use('App/Classes/AuthenticatedResourceController')

class QuizzesController extends AuthenticatedResourceController {

    constructor(){
        super();
        this.model = Quizzes;
    }

}

module.exports = QuizzesController