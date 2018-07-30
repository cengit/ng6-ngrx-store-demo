import { Action } from '@ngrx/store';
import { Article } from '../models/article';

export const JAVA = 'Java';
export const  ANGULAR = 'Angular';
export const  MY_ARTICLES = 'Favorite_Articles';
export const JAVA_ADD = 'Java_add';

export class JavaArticlesAction implements Action {
  readonly type = JAVA;
}

export class AngularArticlesAction implements Action {
  readonly type = ANGULAR;
}

export class JavaAddArticleAction implements Action {
  readonly type = JAVA_ADD;
  constructor(public payload: Article[]) {}
}

export class FavoriteArticlesAction implements Action {
  readonly type = MY_ARTICLES;

  constructor(public payload: Article[]) {}
}

export type All = JavaArticlesAction | AngularArticlesAction | FavoriteArticlesAction | JavaAddArticleAction; 