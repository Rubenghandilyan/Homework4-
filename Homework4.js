
//problem 1 +
const triangleStars=function(n)
{
	const anpop=function(p)
	{
		if(p===0)
		{
			return;
		}
		const stars=function(st)
		{
			if(st===1)
			{
				return "*";
			}
			return "*" + stars(st-1);
		}	 
		const space= function(p)
		{
			if((n-p)==0)
			{
				return "";
			}
			return " " + space(p+1);
		}
		console.log(space(p) + stars(2*p-1));
		anpop(p-1);
	}
	anpop(n);
}
//debugger;
//triangleStars(5);

//problem 2 +

const pow=function(base,n)
{
	if(n===1)
	{
		return base;
	}
	return base*pow(base,n-1);
}
const c=pow(16,1);
//console.log(c);

//problem 3 +

const reverse1 = function(n)
{
	const reverse2 = function(str,l)
	{
		if(l===0)
		{
			return str[0];
		}
		return str[l] + reverse2(str,(l-1));
	}
	return reverse2(n,n.length-1);
}
//console.log(reverse1("abcd"));

//problem 4 +

const checkerboard = function(n)
{
	const checkerboard2 = function(p)
	{
		if(p===0)
		{
			return "           ";
		}
		const hat1 = function(b)
		{
			if(b===1)
			{
				return "*" + " ";
			}
			return "*" + " " + hat1(b-1);
		}
		const hat2 = function(c)
		{
			if(c===1)
			{
				return " " + "*";
			}
			return " " + "*" + hat2(c-1);
		}
		if(p%2===0)
		{
			console.log(hat1(n)); 
			checkerboard2(p-1);
		}
		if(p%2!==0)
		{
			console.log(hat2(n)); 
			checkerboard2(p-1);
		}
	}
	const checkerboard3 = function(p)
	{
		if(p===0)
		{
			return "          ";
		}
		const hat1 = function(b)
		{
			if(b===1)
			{
				return "*" + " ";
			}
			return "*" + " " + hat1(b-1);
		}
		const hat2 = function(c)
		{
			if(c===1)
			{
				return " " + "*";
			}
			return " " + "*" + hat2(c-1);
		}
		if(p%2!==0)
		{
			console.log(hat1(n)); 
			checkerboard3(p-1);
		}
		if(p%2===0)
		{
			console.log(hat2(n)); 
			checkerboard3(p-1);
		}
	}
	if(n%2===0)
	{
		checkerboard2(n);
	}
	else
	{
		checkerboard3(n);
	}
}
//checkerboard(6);

