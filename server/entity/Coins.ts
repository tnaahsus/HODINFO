import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Coins {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column({nullable: true})
    public name: string | null;
    @Column({nullable: true})
    public last: string | null;
    @Column({nullable: true})
    public buy: string | null;
    @Column({nullable: true})
    public sell: string | null;
    @Column({nullable: true})
    public volume: string | null;
    @Column({nullable: true})
    public baseunit: string | null;

}
export default Coins;