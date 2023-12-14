        const customers = [];

        function addCustomer(name, accountNumber) {
            let newCustomer = {
                name: name,
                accountNumber: accountNumber,
                balance: 0,
                transactionHistory: []
            };
            customers.push(newCustomer);
        }
        

        function deposit(accountNumber, amount) {
            const customer = findCustomer(accountNumber);
            if (customer) {
                customer.balance += amount;
                updateTransactionHistory(customer, 'Deposit', amount);
                console.log(`Deposit successful. New balance: ${customer.balance}`);
            } else {
                console.log('Customer not found');
            }
        }

        function withdraw(accountNumber, amount) {
            const customer = findCustomer(accountNumber);
            if (customer) {
                if (amount <= customer.balance) {
                    customer.balance -= amount;
                    updateTransactionHistory(customer, 'Withdrawal', amount);
                    console.log(`Withdrawal successful. New balance: ${customer.balance}`);
                } else {
                    console.log('Insufficient funds');
                }
            } else {
                console.log('Customer not found');
            }
        }

        function checkBalance(accountNumber) {
            const customer = findCustomer(accountNumber);
            if (customer) {
                console.log(`Current balance: ${customer.balance}`);
            } else {
                console.log('Customer not found');
            }
        }

        function viewTransactionHistory(accountNumber) {
            const customer = findCustomer(accountNumber);
            if (customer) {
                console.log(`Transaction History for ${customer.name}:`);
                customer.transactionHistory.forEach(transaction => {
                    console.log(`${transaction.type}: ${transaction.amount}`);
                });
            } else {
                console.log('Customer not found');
            }
        }

        function findCustomer(accountNumber) {
            return customers.find(customer => customer.accountNumber === accountNumber);
        }

        function updateTransactionHistory(customer, type, amount) {
            const transaction = {
                type: type,
                amount: amount,
            };
            customer.transactionHistory.push(transaction);
        }

        function validateCustomerData(name, accountNumber) {
            if (customers.some(customer => customer.accountNumber === accountNumber)) {
              return false; // Account number is not unique
            }
            // Add more validation as needed
            return true;
          }

        function editCustomerInfo(accountNumber, {}) {
            let customer = findCustomerByAccountNumber(accountNumber);
            if (customer) {
              Object.assign(customer, newInfo);
              return "Customer info updated";
            } else {
              return "Customer not found";
            }
          }

        function getHighBalanceCustomer(Highbalance) {
            return customers.filter(customer => customer.balance >= minimumBalance);
        }

        function calculateTotalBalance() {
            return customers.reduce((total, customer) => total + customer.balance, 0);
        }

        // Run
        addCustomer('andi', '1234');
        deposit('1234', 7000);
        withdraw('1234', 2000);
        checkBalance('1234');
        viewTransactionHistory('1234');
