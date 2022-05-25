<h2 align="center">Login Form</h2>

<br>

## Wymagana wiedza

- Typescript, Angular

## Technologie potrzebne do zadania

- Typescript, Angular, ReactiveForms

## Cele główne

- [ ] Stwórz logikę formularza do logowania(reactive forms):

* Musi składać się z: email, password, checkbox dotyczący `zapamiętaj mnie!`
* Waliduj pola formularzy oraz pamiętaj o stylowaniu kontrolek w zależności od ich stanu.
* Formularz poza naszymi walidacjami powinien przekazać dane do CheckCredentials która powinna zwrócić informacje o tym czy formularz jest poprawny.
* Jeżeli CheckCredentials jest nie poprawny to wyrzucamy informacje userowi że podał złe dane.
* Jeżeli funkcja CheckCredentials daje true to przenosimy do url `dashboard`

## Przydatne linki

- Dokumentacja ReactiveForms - https://angular.io/guide/reactive-forms

## Początek kodu

```javascript
CheckCredentials(email: string, password: string): boolean {
    return email === 'test@o2.pl' && password === '123123';
}

```
