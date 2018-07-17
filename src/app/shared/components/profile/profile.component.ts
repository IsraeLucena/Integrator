import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../app.state';
import { ConfigService } from '../../services/config/config.service';
import { DataService } from '../../services/data/data.service';

@Component({
	selector: 'profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class Profile implements OnInit {
	isProfileVisible = true;
	isProfileSubmenuVisible = false;
	profile: any;

	constructor(public config: ConfigService, private _state: GlobalState, private _DataService: DataService) {

		this._state.subscribe('profile.isProfileVisible', isProfileVisible => {
			this.isProfileVisible = this.config.profile.isProfileVisible;
		});
	}

	ngOnInit() { }
}
