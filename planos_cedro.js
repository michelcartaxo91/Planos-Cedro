function isChecked()
{
	if (document.getElementById("LiCheck").checked)
		return true;
	else
		return false;	
}

function cor(champs) 
{
	var show = document.getElementById("planos");

	$(".planos").removeClass('active');
	champs.classList.add("active");
	$(champs).find(".check").prop('checked', true);
} 
