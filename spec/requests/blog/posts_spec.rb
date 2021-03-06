require 'spec_helper'
describe "posts" do
  before(:each) do
    Factory(:post, title: "post X")
  end

  it "lists posts" do
    visit blog_path

    page.should have_content("post X")
  end

  it "should route to a post" do
    visit blog_path
    click_on "post X"
    page.should have_content("A sample of text for this post that has some html markup")
  end

  it "should return 404 on non existent post" do
    visit "/blog/this/is/a/404/url"
    page.should have_content("You may have mistyped the address or the page may have moved")
  end

  it "should not show post with published date in the future" do
    Factory(:post, published_at: DateTime.new(3000), title: "I am Marty McFly")
    visit blog_path
    page.should_not have_content "I am Marty McFly"
  end
end