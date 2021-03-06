import info from '../info.js';
import {controlGenerators as menuControlGenerators} from '../../content/menu/menuControls.js';
import {pageGenerator as creditsPageGenerator} from '../../content/pages/credits.js';
import {pageGenerator as importPageGenerator} from '../../content/pages/import.js';
import {pageGenerator as sharePageGenerator} from '../../content/pages/share.js';
import {pageGenerator as infoPageGenerator} from '../../content/pages/info.js';
import resources from '../resources.js';

//I've ended up re-coupling header and the Core a little, which sort of makes sense, since header contains a lot of things that need to interact with other parts of the app.

/**
 * Controller class for the header bar. Manages the list of menu items, the changes that occur in the header when layout-locking or going into minimal view
 * logoContent should be a fully fledged dom object or html text (can be plain text too), heading and flavourtext should be text-only though.
 */
class Header
{
	constructor(appCore)
	{
		this.appCore = appCore;
		this.controls = [];
		this.pages = [];
		var versionComponents = info.version.split('-');

		this.DOMRoot = $(
			'<div>',
			{
				class: 'header overlay'
			}
		);

		let headerSubWrapper = $(
			'<div>',
			{
				class: 'headerSubWrapper'
			}
		);
		this.DOMRoot.append(headerSubWrapper);

		let menuButton = $(
			'<button>',
			{
				type: 'button',
				class: 'menuButton buttonRule' //note: make this use the class titleAndIconText when the header is hidden? possibly
			}
		);

		menuButton.append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="124px" height="124px" viewBox="0 0 124 124" style="enable-background:new 0 0 124 124;" xml:space="preserve"> <g><path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/> <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/><path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/></g></svg>');
		menuButton.on(
			'click',
			function(e)
			{
				if(appCore.viewMode == 'minimal')
				{
					appCore.setViewMode('standard');
				}
			}
		)
		this.DOMRoot.append(menuButton);

		let infoWrapper = $(
			'<div>',
			{
				class: 'appInfoWrapper'
			}
		);
		headerSubWrapper.append(infoWrapper);

		let logoElm = $(
			'<div>',
			{
				class: 'headerLogo'
			}
		);
		infoWrapper.append(logoElm);

		logoElm.append(resources.logo);

		let infoElm = $(
			'<div>',
			{
				class: 'appInfo'
			}
		);
		infoWrapper.append(infoElm);

		let headingElm = $(
			'<h1>',
			{
				html: info.heading
			}
		);

		infoElm.append(headingElm);

		let versionElm = $(
			'<span>',
			{
				class: 'version',
				html: 'v' + info.version
			}
		);
		infoElm.append(versionElm);

		let flavorElm = $(
			'<span>',
			{
				class: 'flavorText',
				html: info.flavorText
			}
		);
		infoElm.append('<br/>', flavorElm);

		// this.navBar = $(
		// 	'<div>',
		// 	{
		// 		class: 'headerNav'
		// 	}
		// );
		// headerSubWrapper.append(this.navBar);

		this.controlsContainer = $(
			'<div>',
			{
				class: 'controlsContainer'
			}
		);
		headerSubWrapper.append(this.controlsContainer);

		this.pagesNav = $(
			'<div>',
			{
				class: 'pagesNav'
			}
		);
		headerSubWrapper.append(this.pagesNav);

		//generate controls
		this.addControls(menuControlGenerators);


		//generate the pages
		this.addPages([creditsPageGenerator, importPageGenerator, sharePageGenerator, infoPageGenerator]);

	}

	/**
	 * Use this method to add one or control items/buttons to the header. the parameter can be a list or a single item.
	 * The controls should be already-created json dom objects, since this header doesn't have any access to the core instance
	 */
	addControls(controlGenerators)
	{
		if(typeof controlGenerators.length === 'undefined')
		{
			controlGenerators = [controlGenerators];
		}
		for(let eachGen of controlGenerators)
		{
			let eachResult = eachGen(this.appCore);
			$(this.controls).add(eachResult);
			this.controlsContainer.append(eachResult);
		}
	}

	/**
	 * Use this method to add one or control items/buttons to the header. the parameter can be a list or a single item.
	 * The controls should be already-created json dom objects, since this header doesn't have any access to the core instance
	 */
	addPages(pageGenerators)
	{
		if(typeof pageGenerators.length === 'undefined')
		{
			pageGenerators = [pageGenerators];
		}
		for(let eachGen of pageGenerators)
		{
			let eachResult = eachGen(this.appCore);
			this.pages.push(eachResult);
			this.appCore.DOMRoot.append(eachResult.DOMRoot);
			this.pagesNav.append(eachResult.navItem);
		}
	}

	/**
	 * Prevents the header from auto collapsing.
	 */
	lock()
	{
		this.DOMRoot.attr('data-locked-open', true);
	}

	unlock()
	{
		this.DOMRoot.attr('data-locked-open', false);
	}
}
module.exports =
{
	Header
};