# dcylabsVerticalButton
This angular extension provide two state button directive. 

# Use it
## Using ng-class
```
<button 
	class="btn btn-primary dcylabs-vertical-button" 
	data-ng-class="isLoggingIn ? 'opened' : ''" 
	data-ng-click="login();">
    <div class="vertical-wrapper">
		<span class="btn"> Visible by default </span>
	    <span class="btn"> Visible when isLoggingIn is equals to true </span>
	 </div>
</button>
```
## Using 'hoverable' class
```
<button 
	class="btn btn-primary dcylabs-vertical-button hoverable">
    <div class="vertical-wrapper">
		<span class="btn"> Visible by default </span>
	    <span class="btn"> Visible when button is hovered </span>
	 </div>
</button>
```