document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    if(event.key === "Escape") {
      closeAllModals();
    }
  });
});

function hideModal(ele){
		$(ele).css('display','none');
	}

var ordersToPick = [];
var inventory = [];
$(document).ready(function(){

	$.ajax({
		headers: {'Accept' : 'application/json'},
		type: 'GET',
		url: "https://script.google.com/macros/s/AKfycbyz41PpsyM77NkNhqf6dsah3W5ApSPGIapH-Nrd1EqFNkS4rYYQ98dEwr5WI8Q65vjcGA/exec?action=read&table=order_to_pick",
		beforeSend: function(xhr){
		xhr.withCredentials = true;
		},
		success: function (response, textStatus, request){
		
			if(response.success){
				ordersToPick = response.data;
				
			}else{
			    //alert('No data available...');
			}		
		}
		});
	
	$.ajax({
		headers: {'Accept' : 'application/json'},
		type: 'GET',
		url: "https://script.google.com/macros/s/AKfycbyz41PpsyM77NkNhqf6dsah3W5ApSPGIapH-Nrd1EqFNkS4rYYQ98dEwr5WI8Q65vjcGA/exec?action=read&table=inventory",
		beforeSend: function(xhr){
		xhr.withCredentials = true;
		},
		success: function (response, textStatus, request){
		
			if(response.success){
				inventory = response.data;
				
			}else{
			    //alert('No data available...');
			}		
		}
		});
		//https://script.google.com/macros/s/AKfycbxj3ydLp6zVBML5lRL8d5O7SpwytGQP3YMwIlhGgOBDhurtGXebv6PCVDMP6lBmtign/exec

});
