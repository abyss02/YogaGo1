import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RssProvider } from "../../providers/rss/rss";


@IonicPage()
@Component({
	selector: 'page-feed',
	templateUrl: 'feed.html',
})
export class FeedPage {
	rssDataArray: any = [];

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public rssProvider: RssProvider) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FeedPage');
		this.Get_RSS_Data()
	}

	Get_RSS_Data() {

		this.rssProvider.GetRSS().subscribe(

			data => {
				this.rssDataArray = data;


				console.log(data);

			}

		);
	}
}


