import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm, FormsModule } from '@angular/forms';

import { AuthService } from './../app/auth/';
import { ErrorsService } from './../app/shared/errors.service';
import { ProjectsService } from './../app/projects';
import { AuthSericeMock, ErrorServiceMock, ProjectServiceMock } from './index';


@NgModule({
    imports: [
        CommonModule,
        RouterTestingModule,
        FormsModule
    ],

    declarations: [],
    providers: [
        NgForm,
        { provide: AuthService, useClass: AuthSericeMock },
        { provide: ErrorsService, useClass: ErrorServiceMock },
        { provide: ProjectsService, useClass: ProjectServiceMock }
    ],
    exports: [
        CommonModule,
        RouterTestingModule,
        FormsModule,
    ]
})

export class TestModule {
}
