# React Redux Movie List

Hello! This example will be built with **React and Redux** and we will include them using only CDN's. The app will allow to insert new movies into the redux store and we will learn not only how to set up react and redux but how the **browser** is able to user them in order to render them on the page. 

### Table of contents
1. [Introduction](#introduction)
2. [Set Up](#paragraph1)
3. [Exploring our CDN's](#paragraph2)
4. ["hello" from ReactDOM](#paragraph2)
5. [Redux](#paragraph2)
6. [react-redux](#paragraph2)
7. [Building our react components](#paragraph2)
8. [Bringing it together](#paragraph2)
9. [Reflexions](#paragraph2)



# Introduction

This Diagram show's the inner workings of redux

                   +-------------------------------------+                           
                   | +------------+                      |                           
                   | |  Reducer   |           +--------+ |                           
                   | +------------+           | Action | |                           
                   |                          +--------+ |                           
        +--------->|                Store                |--------------+            
        |          |                          +--------+ |              |            
        |          |                          |Reducer | |              |            
        |          |                          +--------+ |              |            
        |          +-------------------------------------+              |            
        |                                                               |            
        |                                                               |            
        |                                                               |            
        |                                                               v            
+---------------+                                            +--------------------+  
|               |                                            |                    |  
|   Dispathch   |                                            |      Connect       |  
|               |                                            |                    |  
+---------------+                                            +--------------------+  
        ^                                                               ^            
        |                                                               |            
 +-------------+                                                        |            
 |             |                                                +--------------+     
 |   Action    |<-------------------+                           |              |     
 |             |                    |                           |              |     
 +-------------+                    |                           | React View   |     
                                    +---------------------------|              |     
                                                                |              |     
                                                                |              |     
                                                                +--------------+     