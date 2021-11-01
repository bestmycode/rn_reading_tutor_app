import { RepositoryBuilderImpl } from '../../../data/repositories/repo-builder'
import '../../../../extensions/array.extensions'
import { BasePresenter, BaseView } from '../base/presenter'
import { LessonsInteractor, LessonsInteractorOutput, LessonsInteractorFactory } from '../../../domain/interactors/lessons-interactor'

export interface ComprehensionView extends BaseView {
    
}

export class ComprehensionPresenter extends BasePresenter implements LessonsInteractorOutput {

    view: ComprehensionView
    private interactor: LessonsInteractor

    constructor(outputView: ComprehensionView) {
        super(outputView)
        this.view = outputView
        this.interactor = LessonsInteractorFactory.createInstance(this, new RepositoryBuilderImpl())
    }

    fetchNextLessons() {

    }

    fetchCompletedLessons() {
        
    }

    onSuccessFetchingCompletedLessons() {

    }

    onSuccessFetchingNextLessons() {

    }

}