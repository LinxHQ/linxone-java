//package com.linxone.api;
//
//import com.linxone.entity.Customer;
//import com.linxone.service.CustomerService;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.BDDMockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//import static org.hamcrest.CoreMatchers.is;
//import static org.hamcrest.Matchers.hasSize;
//import java.util.List;
//import java.util.stream.Collectors;
//import java.util.stream.IntStream;
//
//
//@RunWith(SpringRunner.class)
//@WebMvcTest(CustomerApi.class)
//public class CustomerApiTest {
//    @Autowired
//    private MockMvc mvc;
//
//    @MockBean
//    private CustomerService customerSer;
//
//    @Test
//    public void testGetAll() throws Exception {
//
//        List<Customer> customers = IntStream.range(0,10)
//                                            .mapToObj(i -> new Customer("name-"+i))
//                                            .collect(Collectors.toList());
//
//        BDDMockito.given(customerSer.getAll()).willReturn(customers);
//
//        mvc.perform(get("/api/customer/get").contentType(MediaType.APPLICATION_JSON)) // Thực hiện GET REQUEST
//                .andExpect(status().isOk()) // Mong muốn Server trả về status 200
//                .andExpect(jsonPath("$", hasSize(10))) // Hi vọng server trả về List độ dài 10
//                .andExpect(jsonPath("$[0].id", is(0))) // Hi vọng phần tử trả về đầu tiên có id = 0
//                .andExpect(jsonPath("$[0].name", is("name-0"))); // Hi vọng phần tử trả về đầu tiên có title = "title-0"
//    }
//}
