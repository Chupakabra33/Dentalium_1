$(function() {

	let items = [
		{

			img: 'Health_funds.jpg',
			alt: 'health_funds_img',
			href: '#',
			heading: 'Health funds',
			info: 'Funding opportunities',
			description: 'Proin lacinia metus vel nisl scelerisque, a pharetra arcu tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sed consequat diam. Ut pellentesque sed magna faucibus placerat. Ut facilisis, risus fermentum eleifend molestie, lacus nisl pretium lectus, sit amet pharetra nisl nisl nec dolor. Suspendisse bibendum a nisi ut dapibus. Nam posuere, nisl non congue scelerisque, est quam dignissim velit, ut euismod leo arcu sed libero. In.'
		},
		{

			img: 'Orthodontics.jpg',
			alt: 'orthodontics_img',
			href: '#',
			heading: 'Orthodontics',
			info: 'Dental treatment',
			description: 'Vestibulum viverra velit sed nisl aliquam, ut lobortis lacus sodales. Cras cursus pulvinar quam, eu porttitor tortor. Sed dictum leo lorem, eu facilisis nunc facilisis vel. Vivamus rutrum orci turpis, a suscipit diam aliquet ut. Etiam vel quam sapien. Maecenas turpis lacus, imperdiet vel eros id, facilisis scelerisque augue. Vivamus imperdiet dictum odio sed cursus. Maecenas in sem congue, iaculis massa nec, hendrerit leo. Nunc non rhoncus purus, nec cursus.'
		},
		{

			img: 'Aesthetic_dentistry.jpg',
			alt: 'aesthetic_dentistry_img',
			href: '#',
			heading: 'Aesthetic dentistry',
			info: 'Dental treatment',
			description: 'Mauris egestas sed neque eget sollicitudin. Sed maximus vehicula sem. Sed ultrices ornare nisl, quis semper leo viverra vitae. Ut suscipit velit nec orci venenatis faucibus. Suspendisse potenti. Ut convallis lectus eu orci consequat, eget pellentesque ipsum efficitur. Nunc non velit feugiat, pulvinar risus nec, suscipit augue. Sed dignissim, est id blandit fermentum, neque tellus elementum urna, eget blandit lectus justo nec purus. Fusce laoreet nunc turpis. Curabitur ullamcorper id.'
		},
		{
			img: 'Implantology.jpg',
			alt: 'implantology_img',
			href: '#',
			heading: 'Implantology',
			info: 'Dental treatment',
			description: 'Nullam vitae gravida purus. Nunc consectetur dui in neque ornare bibendum non sit amet lacus. Aenean a nisi elit. Maecenas scelerisque lacinia metus ac dictum. Ut non orci velit. Curabitur accumsan molestie ante, a ultrices urna. Praesent varius rhoncus purus, a placerat ex venenatis quis. Integer neque sapien, facilisis nec massa at, facilisis elementum ante. Vivamus non maximus justo. Suspendisse turpis mauris, volutpat quis luctus sit amet, laoreet id mi.'
		},
		{
			img: 'Parodontology.jpg',
			alt: 'parodontology_img',
			href: '#',
			heading: 'Parodontology',
			info: 'Dental treatment',
			description: 'Cras leo lectus, pellentesque ut magna in, interdum varius est. Vestibulum facilisis convallis urna et dictum. Sed accumsan massa et dui eleifend euismod a nec turpis. Aliquam vel elementum velit. Phasellus convallis erat eget dapibus mollis. Fusce mattis est at purus vehicula luctus. Nullam cursus ipsum sed erat pulvinar laoreet. Cras pharetra viverra vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas porttitor massa lectus, sit amet.'
		},
		{
			img: 'Endodontology.jpg',
			alt: 'endodontology_img',
			href: '#',
			heading: 'Endodontology',
			info: 'Dental treatment',
			description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam quis accumsan felis. Vestibulum id velit sed orci aliquam tristique. Ut aliquet nisl nec ante euismod condimentum. Proin porttitor justo nec maximus euismod. Aenean est nisl, malesuada nec libero ac, vehicula pulvinar dolor. Pellentesque a libero et mauris pharetra commodo id ut leo. Maecenas tincidunt tincidunt mi id tincidunt. In facilisis sollicitudin nisi, non rutrum est molestie sed. Aliquam.'
		},
		{
			img: 'Oral_prophylaxis.jpg',
			alt: 'oral_prophylaxis_img',
			href: '#',
			heading: 'Oral prophylaxis',
			info: 'Dental treatment',
			description: 'Morbi pharetra, libero at semper dignissim, mauris metus condimentum ex, in aliquam odio metus ut libero. Nunc nec pharetra dui. Nulla dictum iaculis metus, sed commodo turpis fringilla et. Sed viverra eros eget elementum varius. Etiam tincidunt sollicitudin arcu. Nunc mollis felis eget tortor cursus blandit. Vivamus ornare vestibulum tempus. Vestibulum faucibus mi posuere luctus interdum. Quisque magna sem, fermentum sit amet sollicitudin id, feugiat at orci. Praesent pellentesque ultrices.'
		},
		{
			img: 'Dental_surgery.jpg',
			alt: 'dental_surgery_img',
			href: '#',
			heading: 'Dental surgery',
			info: 'Dental treatment',
			description: 'Nullam lacinia, ex at dignissim placerat, mi nisi commodo mi, sed viverra neque mauris eget diam. Vestibulum facilisis elementum ligula, in maximus velit pharetra at. Suspendisse dapibus scelerisque dui, at iaculis urna maximus nec. Praesent id purus erat. Morbi a nisl tempus, tempor erat a, interdum dui. Donec molestie dolor ut sollicitudin aliquam. Sed quis laoreet lacus. Vivamus ac hendrerit neque. Phasellus volutpat neque non justo iaculis dictum. Nam sapien.'
		},
		{
			img: 'Pediatric_dentistry.jpg',
			alt: 'pediatric_dentistry_img',
			href: '#',
			heading: 'Pediatric dentistry',
			info: 'Dental treatment',
			description: 'Aliquam sodales, metus sit amet condimentum tristique, nulla urna elementum libero, et gravida erat ex sed orci. Mauris velit justo, aliquet vel lacus eget, laoreet pharetra velit. Ut cursus volutpat fringilla. Suspendisse sem sapien, iaculis et malesuada at, ultricies et ipsum. Donec quis dolor at est luctus scelerisque non at velit. Curabitur euismod sagittis tortor, nec faucibus sem rhoncus vel. Nulla sed posuere quam, eu rhoncus lacus. Quisque id laoreet.'
		},
		{
			img: 'news_image_1_search.jpg',
			alt: 'news_1_img',
			href: '#',
			heading: 'Some news here with a very long heading',
			info: 'News',
			description: 'Etiam gravida, tellus vitae imperdiet aliquam, enim erat hendrerit orci, quis malesuada est tellus in mauris. Cras ullamcorper vitae mi vel dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut et lectus lobortis, consectetur urna quis, gravida nisl. Vestibulum fermentum, ante consectetur ultricies venenatis, nibh metus egestas dui, ac gravida augue augue malesuada massa. Pellentesque convallis magna et lobortis vulputate. Donec rhoncus dictum elit.'
		},
		{
			img: 'news_image_2_search.jpg',
			alt: 'news_2_img',
			href: '#',
			heading: 'Another news',
			info: 'News',
			description: 'Mauris eget sodales ipsum. Nullam risus quam, volutpat eget ex porta, fermentum venenatis justo. Donec vitae mi eu sem fringilla dictum. Curabitur vulputate tincidunt urna eu porttitor. Integer non orci ut tortor pharetra viverra. Morbi erat sem, tincidunt eu rutrum molestie, faucibus sit amet nisl. Fusce elementum purus erat, vel convallis nunc lacinia a. Sed rhoncus tellus risus, ut molestie eros aliquam in. Quisque pretium, tortor eu ultrices sodales, lacus.'
		},
		{
			img: 'news_image_3_search.jpg',
			alt: 'news_3_img',
			href: '#',
			heading: 'Third news there',
			info: 'News',
			description: 'In mollis interdum tincidunt. Suspendisse fermentum enim sollicitudin lectus laoreet, et porttitor lorem fermentum. Quisque in dolor ac nisl iaculis facilisis. Nullam magna elit, consequat sed ante volutpat, semper dignissim augue. Pellentesque dapibus dui ut risus pretium tincidunt. Duis id nisl neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed fringilla pharetra sagittis. Suspendisse porta est et orci faucibus finibus. Mauris volutpat nibh sem, id volutpat lacus.'
		}
	]

	let theWholePage = $('#theWholePage');
	let allItems = theWholePage.find('#allItemsWrapper');
	let searchForm = theWholePage.find('#searchForm');
	let searchInput = theWholePage.find('#searchInput');
	let itemsHtml = theWholePage.find('.items');

	appendItem(items);

	function appendItem(items) {
		allItems.html('');
		for (let i = 0; i < items.length; i++) {
			let currentItem = items[i];
			let htmlItems = createItemHtml(currentItem);
			allItems.append(htmlItems);
		}
	}

	function createItemHtml(item) {
		let result = $('<div class="items">');
		let itemImage = $('<img class="item-img" src="./project-images/' + item.img + '"' + 'alt="' + item.alt + '"/>');
		let headDescrWrapper = $('<a class="head-descr-wrapper" href="' + item.href + '">');
		let heading = $('<h3 class="item-heading">').text(item.heading);
		let headingInfo = $('<br/><span>(' + item.info + ')</span>')
		let descr = $('<div class="item-description">').text(item.description);

		heading.append(headingInfo);
		headDescrWrapper.append(heading).append(descr);
		result.append(itemImage).append(headDescrWrapper);

		return result;
	}

	searchForm.submit(function(find) {
		find.preventDefault();
		find.stopPropagation();

		let conjunctions = [];

		for (let i = 0; i < items.length; i++) {
			let currentItem = items[i];
			let lowerCaseItemHeading = (currentItem.heading).toLowerCase();
			let lowerCaseItemInfo = (currentItem.info).toLowerCase();
			let lowerCaseItemInput = (searchInput.val()).toLowerCase();
			let isConjunction = lowerCaseItemHeading.indexOf(lowerCaseItemInput) >=0 || lowerCaseItemInfo.indexOf(lowerCaseItemInput) >=0;
			if (isConjunction) conjunctions.push(currentItem);
			appendItem(conjunctions);
		}
	});
});
