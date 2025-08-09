Feature: Category Management
  As an admin user
  I want to manage categories
  So that I can organize products effectively

  Background:
    Given I am logged in as an admin user
    And I am on the admin dashboard

  @cc @create
  Scenario: Create a new category
    Given I navigate to the category page
    When I click on "Add New" button
    And I fill in the category name with "Test Category"
    And I fill in the category description with "Test category description"
    And I click on "Create" button
    Then I should redirected to the category list page
    And I should be redirected to the category list page

  @ce @edit
  Scenario: Edit an existing category
    Given I navigate to the category page
    And there is an existing category to edit
    When I click on the dropdown menu for the category
    And I click on "Edit" link
    And I update the category name to "Updated Category Name"
    And I update category description with "Update Test category description"
    And I click on "Save Changes" button
    Then I should see the success message "Updated successfully"

  @cd @delete
  Scenario: Delete a category
    Given I navigate to the category page
    And I click on "Categories" link
    And there is an existing category to delete
    When I click on the dropdown menu for the category
    And I click on "Delete" link
    # And I should see the confirmation dialog "Are you sure want to delete category?"
    And I click on the confirmation dialog
    Then I should see the success message "Category deleted." 