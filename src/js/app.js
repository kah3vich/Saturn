import { IndexCase } from '../components/pages/Index/IndexCase/script.js';
import { IndexMain } from '../components/pages/Index/IndexMain/script.js';
import {
	AboutDescription,
	AddDescription,
	ButtonTop,
	CatalogAddition,
	CatalogCase,
	CatalogCollection,
	CatalogMain,
	Feedback,
	GoodsMain,
	Header,
	HelperQuestion,
	IndexCatalogLink,
	IndexSteps,
	ModalCollection,
	ModalFeedback,
	ModalPhoto,
	ModalVideo,
	Slider,
	Team,
} from '../components/script.js';

Header();
IndexCase();
CatalogCase();
Feedback();
CatalogCollection();
Team();
Slider();
IndexMain();
CatalogMain();
IndexSteps();
HelperQuestion();
CatalogAddition();
ModalFeedback();
ModalCollection();
AboutDescription();
GoodsMain();
AddDescription();
ButtonTop();
ModalVideo();
ModalPhoto();
IndexCatalogLink();

$(document).ready(function () {
	$('.b24-web-form-popup-btn-40').click(function () {
		$('.b24-web-form-popup-btn-5dsrxs').click();
	});
});
