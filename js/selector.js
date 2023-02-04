function showSelectedDiv(divListId, selectorId, element)
{
    divId = document.getElementById(selectorId).value;

    for (var i = 0; i < divListId.length; i++)
        document.getElementById(divListId[i]).style.display = 'none';
    document.getElementById(divId).style.display = 'block';
}