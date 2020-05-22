package com.linxone.service;

import com.linxone.entity.Customer;
import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Collectors;
import java.util.stream.IntStream;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomereServiceTest {

    @MockBean CustomerService customerSer;

    @BeforeEach
    public void init(){
        Mockito.when(customerSer.getAll()).thenReturn(IntStream.range(0, 10)
                .mapToObj(i -> new Customer("Den vau-" + i))
                .collect(Collectors.toList()));
    }

    @Test
    public void testGetAll(){
        Mockito.when(customerSer.getAll()).thenReturn(IntStream.range(0, 10)
                .mapToObj(i -> new Customer("Den vau-" + i))
                .collect(Collectors.toList()));

        Assert.assertEquals("Den vau-4", customerSer.getAll().get(4).getName()); ;
    }
}
