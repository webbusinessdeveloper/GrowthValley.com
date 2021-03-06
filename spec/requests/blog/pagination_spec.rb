# encoding: UTF-8
require 'spec_helper'
describe "pagination" do
  before(:each) do
    22.times { |i| Factory(:post, title: "post #{i}") }
  end

  it "should not show all posts" do
    visit blog_path
    page.should_not have_content("post 11 + 1}")
  end

  it "can go to older posts" do
    visit blog_path
    home_page = page.html
    click_on "Older Posts"
    page.html.should_not eq(home_page)
  end

  it "can go to newer posts" do
    visit blog_posts_page_path(2)
    page_2 = page.html
    click_on "Newer Posts"
    page.html.should_not eq(page_2)
  end

  it "should not show 'newer posts' on first page" do
    visit blog_path
    page.should_not have_content("Newer Posts")
  end

  it "should not show 'older posts' on last page" do
    visit blog_posts_page_path(3)
    page.should_not have_content("Older Posts")
  end
end