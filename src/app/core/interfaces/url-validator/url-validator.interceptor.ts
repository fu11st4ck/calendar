import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { isValid } from 'date-fns';

export const urlValidatorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router)
  const currentDate: Date = new Date();

  router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((event) => {
    if ('url' in event) {
      let isUrlDateValid: boolean = false;
      const urlFragmentArray: string[] = event.url.split('/')
      
      isUrlDateValid = isValid(new Date(parseInt(urlFragmentArray[1]), parseInt(urlFragmentArray[2])));
      
      if (!isUrlDateValid) {
        router.navigate(['', currentDate.getFullYear(), currentDate.getMonth()])
      }

      return next(req);
    }
  })
};
