# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The BlogPostsController is used to handle the actions of the controller methods for each type of http request. It is part of the restful routes for create, read, update, and destroy operations. 
class BlogPostsController < ApplicationController
  def index
    # ---2) Creates an instance variable to hold the active record query for all data in the BlogPost databse. This can be used in an erb file to display data in a readable manner, and give us access to each item to perform CRUD actions.
    @posts = BlogPost.all
  end

  def show
    # ---3) Shows data for a particular item based on the id param passed in. This data can be passed to a show.html.erb file to display data in the browser and give us addition buttons/links to edit or delete that item.
    @post = BlogPost.find(params[:id])
  end

  # ---4) This method is used to start the process of adding a blog post to the database. The .new method will create a new database object. We can route to a form on new.html.erb for the user to add data to each attribute. I believe the instance variable below should actually be assigned to BlogPost.new, not Post.new.
  def new
    @post = Post.new
  end

  def create
    # ---5) Create will submit the data from the form above to the database. It is passed an strong params argument that dictates what attributes can be updated. An if statement is used to route the user to a new page based on if the form was filled out correctly and all validations were met. If this is true, a redirected will be triggered to a page containing the new blog post. If false, it redirects to the form for creating a new blog post. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) Edit hold an instance variable for the active record query of a blog post with a particular id which is passed in as a param. This will ultimately route to a form with the attributes of the item prepopulated in its respective input fields. This data can then be changed to update the database. 
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The .update method sends the data from the edit form to the database. An if statement is used to route the user to a new page based on if the form was filled out correctly and all validations were met. If this is true, a redirected will be triggered to a page containing the updated blog post. If false, it redirects to the form for editing the blog post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If the blog post did not end up getting deleted a redirect is triggered to a new page based on the route alias. Since the route requires a param the alias is also passed a param which in this case would be the id of the item.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private houses the strong params. It protects the method/s below it from being called anywhere else in the application. 
  private
  def blog_post_params
    # ---10) params has two methods attached, .require and .permit. blog_post_params requires that a blog_post object be created. Next, it is allowing two attributes to be passed in, the title of the blog post and its content. 
    params.require(:blog_post).permit(:title, :content)
  end
end
