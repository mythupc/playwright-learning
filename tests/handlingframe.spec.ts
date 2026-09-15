import {test , expect} from "@playwright/test";

test("Handling frame", async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");


    //total no of frames present on page
    const frames = page.frames();
    console.log("No of frames:",frames.length);
    
    //there are 2 ways to approach elements in frames
    //approach 1:using page.frame()
    //here when we use page.frame we use either name or url of frame
    /*
   const frame= page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"});

   if (frame)
   {
    await frame.locator("[name='mytext1']").fill("hello");//this is one approach

    //await frame.fill("[name='mytext1']","hello"); //this is other approach
   }
   else
    {
        console.log("not available");
    }

await page.waitForTimeout(5000);
*/
//aproach2 using framelocator()
const inputbox =page.frameLocator("[src='frame_1.html']").locator('[name="mytext1"]').fill("hello");
await page.waitForTimeout(5000);





});

