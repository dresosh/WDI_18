#include <stdio.h>

main()
{
	int fahr, celsius; //var decl
	int lower, upper, step; // var decl
	lower = 0; //assignments
	upper = 300; 
	step = 20;

	fahr = lower; //setting state of fahr ==0
	while (fahr <= upper) { 
		celsius = 5 * (fahr-32) / 9; //formula
		printf("%d\t%d\n", fahr, celsius);  
		fahr = fahr + step;
	}
}