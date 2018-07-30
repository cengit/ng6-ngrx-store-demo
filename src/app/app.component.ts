import { Store } from '@ngrx/store';
import { Component } from '@angular/core';    
import { Observable } from 'rxjs';
import * as articleReducer from './reducers/article.reducer';
import * as fromActions from './actions/article.actions';
import { ArticleState } from './reducers/app.states';
import { Article, FAVORITE_ARTICLES } from './models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Observable<Article[]>;

	constructor(private store: Store<ArticleState>) {
		this.articles = store.select(articleReducer.getArticles);
	}
	showJavaArticles(){
		this.store.dispatch(new fromActions.JavaArticlesAction());
	}
	showAngularArticles(){
		this.store.dispatch(new fromActions.AngularArticlesAction());
	}
	showFavoriteArticles(){
		this.store.dispatch(new fromActions.FavoriteArticlesAction(FAVORITE_ARTICLES));
  }
  addArticle(){
    const rd = Math.random();
    const rdInt = Math.round(rd *100);
    let art: Article[] = [];
    art.push({id: rdInt, title: 'Article'+rdInt, category: 'Java'})

    this.store.dispatch(new fromActions.JavaAddArticleAction(art))
  }
}
