import {
    EnhancedStore, ReducersMapObject, AnyAction, Reducer, CombinedState, Dispatch,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import { NavigateOptions, To } from 'react-router-dom';
import { ArticleCommentsSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/addCommentForm';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // Асинхронные редьюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleComments?: ArticleCommentsSchema
    addCommentForm?: AddCommentFormSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction)=> CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options: NavigateOptions) => void
}

export interface ThunkConfig<T>{
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}
