/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
// Constant global variables
const studentList = document.querySelectorAll('.student-item cf');
const pages = document.querySelectorAll('.page');
const studentPerPage = 10;




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
// showPage function to hide students on given page
function showPage(studentList, page)
{
   // Declare variables to start and end index for list of items shown on page
   let startIndex = (page * studentPerPage) - studentPerPage;
   let endIndex = page * studentPerPage;

   for (let i = 0; i < studentList.length; i++)
   {  
      if (studentList[i] >= startIndex && studentList[i] < endIndex)
      {
         studentList[i].style.visibility = '';
      }
      else
      {
         studentList[i].style.visibility = 'hidden';
      }
   }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) =>
{

}


// Remember to delete the comments that came with this file, and replace them with your own code comments.