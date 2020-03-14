import { Pipe, PipeTransform } from '@angular/core';
import { ICustomer } from './customers';

@Pipe(
    {
        name:'customerFilter'
    }
)
export class CustomerFilterPipe implements PipeTransform{
    transform(value: ICustomer[] ,args :string): ICustomer[]{

        let result = args ? args: null;

        return result? value.filter((customer :ICustomer)=>
        customer.accountNumber.toString().indexOf(result)!=-1):value;

    }
}