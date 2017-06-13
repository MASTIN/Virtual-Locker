# SafeKeeper (AKA Virtual-Locker) :lock:

#### A personal inventory for insurance, theft or relocation purposes.  

## CONTENTS
[:bust_in_silhouette: Sign in or Sign up](#user)

[:clipboard: Inventory](#inventory)

[:pencil: Add, Update or Delete](#CUD)

___
## USERS :bust_in_silhouette: <a name="user"></a>
**The customer gets a list of options**

![customer menu]

**If the customer chooses:**
See all available magical pets


**If the customer chooses:**
I have enough magic in my life, I'd like to exit
* Connection to database is terminated


___
## Manager View :clipboard: <a name="inventory"></a>
**The manager gets a list of options**



**If the manager chooses:**
View products on sale
* They get a list of all products with IDs, prices and number in stock

View low inventory
* They get a list of products with less than 5 in stock

**If the manager chooses:**
Add to inventory
* They get a list of existing products they can add to

**If the manager chooses:**
Add a new product
* They type in the name of the new product(this is validated against existing products to make sure it is not already in the database)
* They choose the department from a list
* They input a price and a quantity of items (these are both validated as numbers greater than 0)

**If the manager chooses:**
Delete a product
* This is a useful function if the manager added too many new products while testing the system!

---
## Supervisor View :briefcase: <a name="CUD"></a>
**The supervisor gets a list of options**

**If the supervisor chooses:**
View product sales by department

**If the supervisor chooses:**
Create a new department
* They type in the name of the new department (this is validated against existing departments to make sure it does not already exist)
* They type in the overhead cost of the new department (this is validated as a number greater than 0)










