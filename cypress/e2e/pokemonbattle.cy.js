describe('Автотест на покупку автара', function () {
      it('Вход на сайт покемонов', function () {
      cy.visit('https://pokemonbattle.me');
      
   })

     it('Покупка фото тренера в магазине покемонов', function () {
      cy.visit('https://pokemonbattle.me');
      cy.get(':nth-child(1) > .auth__input').type('angelika.demyanko@gmail.com');
      cy.get('#password').type('QA2024');
      cy.get('.auth__button').click();
      cy.get('.header__btns > [href="/shop"]').click();
      var list = cy.get('.shop__list > li').not('.feature-empty').children('.shop__button');
      var randomIndex = Math.floor(Math.random() * 11);
      list.eq(randomIndex).click();
      cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
      cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
      cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
      cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('IVAN IVANOV');
      cy.get('.pay-btn').click();
      cy.get('.payment__fielheader').should('be.visible');
      cy.get('.payment__fielheader').contains('Подтверждение покупки');
      cy.get('#cardnumber').type('56456');
      cy.get('.payment__submit-button').click();
      cy.get('.success__image').should('be.visible');
      cy.get('.payment__font-for-success').should('be.visible');
      cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
      cy.get('.payment__adv').should('be.visible');

   })
})