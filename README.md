# ShoppingCartJS
  # Setup
  - Windows Requirements
    - [Nodejs](https://nodejs.org/en/) (used 10.15.3 LTS)
  
  # Running
  - assuming installed nodejs with default settings, in command prompt type the command:
    ```
    node C:\ShoppingCart\ShoppingCart.js
    ```
    Or depending where the .js file will be located
    
  # Scenario tests
  - on the lower section of the code there are 4 scenario tests as presented in the technical test
  - first one is uncommented and will be used if executed and appears like this
    ```
    var cart = new ShoppingCart("1");
    ShoppingCart.new(pricingRules)
    cart.showScenario();
    cart.add("ult_small");
    cart.add("ult_small");
    cart.add("ult_small");
    cart.add("ult_large");
    cart.total();
    cart.items();
    ```

  - only one scenario at a time can be run, comment other scenarios
