document.addEventListener("DOMContentLoaded", function(){ 				window.addEventListener( 'DOMContentLoaded', function() {
					const scope = document.querySelector( '.uagb-block-30ac710a' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--masonry' ) ) {
							const element = scope.querySelector( '.spectra-image-gallery__layout--masonry' );
							const isotope = new Isotope( element, {
								itemSelector: '.spectra-image-gallery__media-wrapper--isotope',
							} );
							imagesLoaded( element ).on( 'progress', function() {
								isotope.layout();
							});
						}
						UAGBImageGalleryMasonry.init( {"block_id":"30ac710a","classMigrate":true,"readyToRender":true,"tileSize":159,"focusListObject":[],"mediaGallery":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-12-150x150.png","orientation":"landscape"},"medium":{"height":200,"width":300,"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-12-300x200.png","orientation":"landscape"},"full":{"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-12.png","height":262,"width":393,"orientation":"landscape"}},"mime":"image\/png","type":"image","subtype":"png","id":147,"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-12.png","alt":"","link":"http:\/\/localhost:8888\/planty\/page-d-exemple\/group-12\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-13-150x150.png","orientation":"landscape"},"medium":{"height":200,"width":300,"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-13-300x200.png","orientation":"landscape"},"full":{"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-13.png","height":263,"width":394,"orientation":"landscape"}},"mime":"image\/png","type":"image","subtype":"png","id":145,"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-13.png","alt":"","link":"http:\/\/localhost:8888\/planty\/page-d-exemple\/group-13\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-15-150x150.png","orientation":"landscape"},"medium":{"height":200,"width":300,"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-15-300x200.png","orientation":"landscape"},"full":{"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-15.png","height":262,"width":393,"orientation":"landscape"}},"mime":"image\/png","type":"image","subtype":"png","id":146,"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-15.png","alt":"","link":"http:\/\/localhost:8888\/planty\/page-d-exemple\/group-15\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-14-150x150.png","orientation":"landscape"},"medium":{"height":200,"width":300,"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-14-300x200.png","orientation":"landscape"},"full":{"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-14.png","height":262,"width":393,"orientation":"landscape"}},"mime":"image\/png","type":"image","subtype":"png","id":144,"url":"http:\/\/localhost:8888\/planty\/wp-content\/uploads\/2023\/05\/Group-14.png","alt":"","link":"http:\/\/localhost:8888\/planty\/page-d-exemple\/group-14\/","caption":""}],"mediaIDs":[147,145,146,144],"feedLayout":"masonry","imageDisplayCaption":false,"captionDisplayType":"bar-inside","columnsDesk":2,"columnsTab":4,"columnsMob":4,"gridImageGap":28,"feedMarginTop":0,"feedMarginRight":0,"feedMarginBottom":0,"feedMarginLeft":0,"feedMarginUnitLink":false,"imageEnableZoom":false,"imageBorderTopWidth":0,"imageBorderLeftWidth":0,"imageBorderRightWidth":0,"imageBorderBottomWidth":0,"imageBorderStyle":"default","UAGDisplayConditions":"none","focusList":[],"galleryImageSize":"large","galleryImageSizeTablet":"large","galleryImageSizeMobile":"medium","imageClickEvent":"none","lightboxDisplayCaptions":false,"lightboxThumbnails":false,"lightboxDisplayCount":false,"lightboxCloseIcon":"xmark","lightboxCaptionHeight":50,"lightboxCaptionHeightTablet":"","lightboxCaptionHeightMobile":"","lightboxIconSize":24,"lightboxIconSizeTablet":"","lightboxIconSizeMobile":"","captionVisibility":"hover","imageCaptionAlignment":"center center","imageCaptionAlignment01":"center","imageCaptionAlignment02":"center","imageDefaultCaption":"No Caption","captionPaddingTop":8,"captionPaddingRight":8,"captionPaddingBottom":8,"captionPaddingLeft":8,"captionPaddingTopTab":8,"captionPaddingRightTab":8,"captionPaddingBottomTab":8,"captionPaddingLeftTab":8,"captionPaddingTopMob":8,"captionPaddingRightMob":8,"captionPaddingBottomMob":8,"captionPaddingLeftMob":8,"captionPaddingUnit":"px","captionPaddingUnitTab":"px","captionPaddingUnitMob":"px","captionPaddingUnitLink":true,"captionGap":0,"captionGapUnit":"px","gridImageGapTab":"","gridImageGapMob":"","gridImageGapUnit":"px","gridImageGapUnitTab":"px","gridImageGapUnitMob":"px","feedMarginTopTab":"","feedMarginRightTab":"","feedMarginBottomTab":"","feedMarginLeftTab":"","feedMarginTopMob":"","feedMarginRightMob":"","feedMarginBottomMob":"","feedMarginLeftMob":"","feedMarginUnit":"px","feedMarginUnitTab":"px","feedMarginUnitMob":"px","carouselStartAt":0,"carouselSquares":false,"carouselLoop":true,"carouselAutoplay":true,"carouselAutoplaySpeed":2000,"carouselPauseOnHover":true,"carouselTransitionSpeed":500,"gridPages":1,"gridPageNumber":1,"feedPagination":false,"paginateUseArrows":true,"paginateUseDots":true,"paginateUseLoader":true,"paginateLimit":9,"paginateButtonAlign":"center","paginateButtonText":"Load More Images","paginateButtonPaddingTop":"","paginateButtonPaddingRight":"","paginateButtonPaddingBottom":"","paginateButtonPaddingLeft":"","paginateButtonPaddingTopTab":"","paginateButtonPaddingRightTab":"","paginateButtonPaddingBottomTab":"","paginateButtonPaddingLeftTab":"","paginateButtonPaddingTopMob":"","paginateButtonPaddingRightMob":"","paginateButtonPaddingBottomMob":"","paginateButtonPaddingLeftMob":"","paginateButtonPaddingUnit":"px","paginateButtonPaddingUnitTab":"px","paginateButtonPaddingUnitMob":"px","paginateButtonPaddingUnitLink":true,"imageZoomType":"zoom-in","captionBackgroundEnableBlur":false,"captionBackgroundBlurAmount":0,"captionBackgroundBlurAmountHover":5,"lightboxEdgeDistance":10,"lightboxEdgeDistanceTablet":"","lightboxEdgeDistanceMobile":"","lightboxBackgroundEnableBlur":true,"lightboxBackgroundBlurAmount":5,"lightboxBackgroundColor":"rgba(0,0,0,0.75)","lightboxIconColor":"rgba(255,255,255,1)","lightboxCaptionColor":"rgba(255,255,255,1)","lightboxCaptionBackgroundColor":"rgba(0,0,0,1)","captionLoadGoogleFonts":false,"captionFontFamily":"Default","captionFontWeight":"","captionFontStyle":"normal","captionTransform":"","captionDecoration":"none","captionFontSizeType":"px","captionFontSize":"","captionFontSizeTab":"","captionFontSizeMob":"","captionLineHeightType":"em","captionLineHeight":"","captionLineHeightTab":"","captionLineHeightMob":"","loadMoreLoadGoogleFonts":false,"loadMoreFontFamily":"Default","loadMoreFontWeight":"","loadMoreFontStyle":"normal","loadMoreTransform":"","loadMoreDecoration":"none","loadMoreFontSizeType":"px","loadMoreFontSize":"","loadMoreFontSizeTab":"","loadMoreFontSizeMob":"","loadMoreLineHeightType":"em","loadMoreLineHeight":"","loadMoreLineHeightTab":"","loadMoreLineHeightMob":"","lightboxLoadGoogleFonts":false,"lightboxFontFamily":"Default","lightboxFontWeight":"","lightboxFontStyle":"normal","lightboxTransform":"","lightboxDecoration":"none","lightboxFontSizeType":"px","lightboxFontSize":"","lightboxFontSizeTab":"","lightboxFontSizeMob":"","lightboxLineHeightType":"em","lightboxLineHeight":"","lightboxLineHeightTab":"","lightboxLineHeightMob":"","captionBackgroundEffect":"none","captionBackgroundEffectHover":"none","captionBackgroundEffectAmount":100,"captionBackgroundEffectAmountHover":0,"captionColor":"rgba(255,255,255,1)","captionColorHover":"rgba(255,255,255,1)","captionBackgroundColor":"rgba(0,0,0,0.75)","captionBackgroundColorHover":"rgba(0,0,0,0.75)","overlayColor":"rgba(0,0,0,0)","overlayColorHover":"rgba(0,0,0,0)","captionSeparateColors":false,"paginateArrowDistance":-24,"paginateArrowDistanceUnit":"px","paginateArrowSize":24,"paginateDotDistance":8,"paginateDotDistanceUnit":"px","paginateLoaderSize":18,"paginateButtonTextColor":"","paginateButtonTextColorHover":"","paginateColor":"","paginateColorHover":"","imageBoxShadowColor":"","imageBoxShadowHOffset":0,"imageBoxShadowVOffset":0,"imageBoxShadowBlur":"","imageBoxShadowSpread":"","imageBoxShadowPosition":"outset","imageBoxShadowColorHover":"","imageBoxShadowHOffsetHover":0,"imageBoxShadowVOffsetHover":0,"imageBoxShadowBlurHover":"","imageBoxShadowSpreadHover":"","imageBoxShadowPositionHover":"outset","arrowBorderTopWidth":4,"arrowBorderLeftWidth":4,"arrowBorderRightWidth":4,"arrowBorderBottomWidth":4,"arrowBorderTopLeftRadius":50,"arrowBorderTopRightRadius":50,"arrowBorderBottomLeftRadius":50,"arrowBorderBottomRightRadius":50,"arrowBorderRadiusUnit":"px","arrowBorderTopWidthTablet":"","arrowBorderLeftWidthTablet":"","arrowBorderRightWidthTablet":"","arrowBorderBottomWidthTablet":"","arrowBorderTopLeftRadiusTablet":"","arrowBorderTopRightRadiusTablet":"","arrowBorderBottomLeftRadiusTablet":"","arrowBorderBottomRightRadiusTablet":"","arrowBorderRadiusUnitTablet":"px","arrowBorderTopWidthMobile":"","arrowBorderLeftWidthMobile":"","arrowBorderRightWidthMobile":"","arrowBorderBottomWidthMobile":"","arrowBorderTopLeftRadiusMobile":"","arrowBorderTopRightRadiusMobile":"","arrowBorderBottomLeftRadiusMobile":"","arrowBorderBottomRightRadiusMobile":"","arrowBorderRadiusUnitMobile":"px","arrowBorderStyle":"none","arrowBorderColor":"","arrowBorderHColor":"","btnBorderTopWidth":"","btnBorderLeftWidth":"","btnBorderRightWidth":"","btnBorderBottomWidth":"","btnBorderTopLeftRadius":"","btnBorderTopRightRadius":"","btnBorderBottomLeftRadius":"","btnBorderBottomRightRadius":"","btnBorderRadiusUnit":"px","btnBorderTopWidthTablet":"","btnBorderLeftWidthTablet":"","btnBorderRightWidthTablet":"","btnBorderBottomWidthTablet":"","btnBorderTopLeftRadiusTablet":"","btnBorderTopRightRadiusTablet":"","btnBorderBottomLeftRadiusTablet":"","btnBorderBottomRightRadiusTablet":"","btnBorderRadiusUnitTablet":"px","btnBorderTopWidthMobile":"","btnBorderLeftWidthMobile":"","btnBorderRightWidthMobile":"","btnBorderBottomWidthMobile":"","btnBorderTopLeftRadiusMobile":"","btnBorderTopRightRadiusMobile":"","btnBorderBottomLeftRadiusMobile":"","btnBorderBottomRightRadiusMobile":"","btnBorderRadiusUnitMobile":"px","btnBorderStyle":"","btnBorderColor":"","btnBorderHColor":"","imageBorderTopLeftRadius":"","imageBorderTopRightRadius":"","imageBorderBottomLeftRadius":"","imageBorderBottomRightRadius":"","imageBorderRadiusUnit":"px","imageBorderTopWidthTablet":"","imageBorderLeftWidthTablet":"","imageBorderRightWidthTablet":"","imageBorderBottomWidthTablet":"","imageBorderTopLeftRadiusTablet":"","imageBorderTopRightRadiusTablet":"","imageBorderBottomLeftRadiusTablet":"","imageBorderBottomRightRadiusTablet":"","imageBorderRadiusUnitTablet":"px","imageBorderTopWidthMobile":"","imageBorderLeftWidthMobile":"","imageBorderRightWidthMobile":"","imageBorderBottomWidthMobile":"","imageBorderTopLeftRadiusMobile":"","imageBorderTopRightRadiusMobile":"","imageBorderBottomLeftRadiusMobile":"","imageBorderBottomRightRadiusMobile":"","imageBorderRadiusUnitMobile":"px","imageBorderColor":"","imageBorderHColor":"","mainTitleBorderTopWidth":2,"mainTitleBorderLeftWidth":0,"mainTitleBorderRightWidth":0,"mainTitleBorderBottomWidth":2,"mainTitleBorderTopLeftRadius":"","mainTitleBorderTopRightRadius":"","mainTitleBorderBottomLeftRadius":"","mainTitleBorderBottomRightRadius":"","mainTitleBorderRadiusUnit":"px","mainTitleBorderTopWidthTablet":"","mainTitleBorderLeftWidthTablet":"","mainTitleBorderRightWidthTablet":"","mainTitleBorderBottomWidthTablet":"","mainTitleBorderTopLeftRadiusTablet":"","mainTitleBorderTopRightRadiusTablet":"","mainTitleBorderBottomLeftRadiusTablet":"","mainTitleBorderBottomRightRadiusTablet":"","mainTitleBorderRadiusUnitTablet":"px","mainTitleBorderTopWidthMobile":"","mainTitleBorderLeftWidthMobile":"","mainTitleBorderRightWidthMobile":"","mainTitleBorderBottomWidthMobile":"","mainTitleBorderTopLeftRadiusMobile":"","mainTitleBorderTopRightRadiusMobile":"","mainTitleBorderBottomLeftRadiusMobile":"","mainTitleBorderBottomRightRadiusMobile":"","mainTitleBorderRadiusUnitMobile":"px","mainTitleBorderStyle":"","mainTitleBorderColor":"","mainTitleBorderHColor":""}, '.uagb-block-30ac710a' );
					}
				});
			 });