function quickViewCallback(property){
    if($('#ModalquickView').length) {
        $("#pageContent [data-target='#ModalquickView']").click(function(){
            var objProduct = $(this).parents('.product');
            var objPopupProduct = $('#ModalquickView');
            if(objProduct.find('.image-box img').length){
                var imgSrc = objProduct.find('.image-box img').attr('src');
                objPopupProduct.find('.product-main-image img').attr('src', imgSrc);
            };
            if(objProduct.find('.title a').length){
                var titleName = objProduct.find('.title a').html();
                objPopupProduct.find('.title').html(titleName);
            } else{
                var titleName = objProduct.find('.title').html();
                objPopupProduct.find('.title').html(titleName);
            };
            if(objProduct.find('.price .new-price').length){
                var priceProduct = objProduct.find('.price').html();
                objPopupProduct.find('.price').html(priceProduct);
            } else{
                var priceProduct = objProduct.find('.price').html();
                objPopupProduct.find('.price').html(priceProduct);
            };
            if(objProduct.find('.description').length){
                var descriptionProduct = objProduct.find('.description').html();
                objPopupProduct.find('.description .text').html(descriptionProduct);
            };
            if(objProduct.find('.nylon').length){
                var nylon = objProduct.find('.nylon span').html();
                objPopupProduct.find('.nylon').html(nylon);
            };
            if(objProduct.find('.metalico').length){
                var metalico = objProduct.find('.metalico span').html();
                objPopupProduct.find('.metalico').html(metalico);
            };
        });
    }
}
quickViewCallback();
