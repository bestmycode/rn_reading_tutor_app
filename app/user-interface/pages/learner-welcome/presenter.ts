
import { RepositoryBuilderImpl } from '../../../data/repositories/repo-builder'
import { UsersInteractor, UsersInteractorOutput, UsersInteractorFactory } from '../../../domain/interactors/users-interactor'
import { FieldValidator } from '../../../utils/field-validator'
import '../../../../extensions/array.extensions'
import { BasePresenter, BaseView } from '../base/presenter'

export interface LearnerWelcomeView extends BaseView {
    showSuccessAlert(): void;
    handleInvalidEmailWithError(error: Error): void;
}

export class LearnerWelcomePresenter extends BasePresenter implements UsersInteractorOutput {

    view: LearnerWelcomeView
    private interactor: UsersInteractor

    constructor(outputView: LearnerWelcomeView) {
        super(outputView)
        this.view = outputView
        this.interactor = UsersInteractorFactory.createInstance(this, new RepositoryBuilderImpl())
    }

    sendPasswordRecoveryEmailTo(email: string) {
        let emailValidation = FieldValidator.validateEmail(email)
        if (emailValidation.error) {
            return this.view.handleInvalidEmailWithError(emailValidation.error)
        }
        this.interactor.sendPasswordResetTo(email)
    }

    onSuccessPasswordReset() {
        this.view.showSuccessAlert()
    }

    onFailedPasswordResetWithError(error: Error) {
        this.view.showErrorAlert(error)
    }

}