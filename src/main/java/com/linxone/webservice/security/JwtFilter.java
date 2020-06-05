//package com.linxone.webservice.security;
//
//import com.linxone.repository.AccountRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.util.StringUtils;
//import org.springframework.web.filter.GenericFilterBean;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//public class JwtFilter extends OncePerRequestFilter {
//    @Autowired JwtProvider jwtProvider;
//    @Autowired MyUserDetailsService myUserDetailsService;
//    @Autowired
//    AccountRepository accountRepository;
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        try {
//            String jwt = getJwtFromRequest(request);
//            if (StringUtils.hasText(jwt) && jwtProvider.validateToken(jwt)) {
//                // Lấy id user từ chuỗi jwt
//                String username = jwtProvider.getUsernameFromJWT(jwt);
//                // Lấy thông tin người dùng từ id
//                MyUserDetails userDetails = (MyUserDetails) myUserDetailsService.loadUserByUsername(username);
//                if(userDetails != null) {
//                    // Nếu người dùng hợp lệ, set thông tin cho Seturity Context
//                    UsernamePasswordAuthenticationToken
//                            authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails((HttpServletRequest) request));
//
//                    SecurityContextHolder.getContext().setAuthentication(authentication);
//                }
//            }
//        }
//        catch (Exception e){
//            String mes = e.toString();
//            if (mes.matches("(?i)(.*)jwt(.*)")){
//                ((HttpServletResponse) response).setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//            }else {
//                throw e;
//            }
//        }
//    }
//
//    private String getJwtFromRequest(HttpServletRequest request) {
//        String bearerToken = request.getHeader("Authorization");
//        // Kiểm tra xem header Authorization có chứa thông tin jwt không
//        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
//            return bearerToken.substring(7);
//        }
//        return null;
//    }
//}
