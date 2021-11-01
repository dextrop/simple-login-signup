# SimpleLoginPage

## Intregration Steps

Extract the code to some directy, Once the code is extracted, user can see folder structure

```
src/
  app/
    forget-password/
      forget-password.component.html
      forget-password.component.ts
      forget-password.component.css

    login/
      login.component.html
      login.component.ts
      login.component.css      
```

copy folder `forget-password` and `login` inside `src/app/`, Add `ForgetPasswordComponent`, `LoginComponent` to app.module.ts. The data templete is added to project.

Use show login/signup page.
```
<app-login></app-login>    
```


Use show forget page.
```
<app-forget-password></app-forget-password>    
```

