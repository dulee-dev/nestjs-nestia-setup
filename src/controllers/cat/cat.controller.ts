import { TypedQuery, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { FindAllQuery } from './dtos/find-all.dto';

interface Response<T> {
  data: T;
  code: number;
  msg: string;
}

interface Cat {
  name: string;
  age: number;
}

@Controller('/cat')
export class CatController {
  @TypedRoute.Get()
  findAll(@TypedQuery() query: FindAllQuery) {
    console.log(query);
    const response: Response<{ cat: Cat }> = {
      data: {
        cat: {
          name: 'Tom',
          age: 3,
        },
      },
      code: 1000,
      msg: 'ok',
    };
    return response;
  }
}
