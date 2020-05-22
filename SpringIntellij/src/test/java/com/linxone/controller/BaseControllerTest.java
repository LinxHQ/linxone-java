package com.linxone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(BaseController.class)
public class BaseControllerTest {
    @Autowired
    private MockMvc mvc;


}
